import { getBiotaByID } from 'api/biota';
import { useLocalSearchParams } from 'expo-router';
import * as React from 'react';

import {
  StyleSheet,
  View,
  Platform,
  TouchableHighlight,
  Text,
} from 'react-native';
import { ArViewerView } from 'react-native-ar-viewer';
import RNFS from 'react-native-fs';
import { useQuery } from '@tanstack/react-query';

export default function Biota() {
  const [localModelPath, setLocalModelPath] = React.useState<string>();
  const [showArView, setShowArView] = React.useState(true);
  const ref = React.useRef() as React.MutableRefObject<ArViewerView>;

  const { id } = useLocalSearchParams()

    const { data, isLoading } = useQuery({
        queryFn : () => getBiotaByID(id as string),
        queryKey : ['biota', id],
    })

  const loadPath = async () => {
    const modelSrc =
      Platform.OS === 'android'
        ? `https://biota.ryvenna.dev/api/files/biota/${data?.id}/${data?.model}`
        : `https://biota.ryvenna.dev/api/files/biota/${data?.id}/${data?.model}`;
    const modelPath = `${RNFS.DocumentDirectoryPath}/${data?.model}`;
    const exists = await RNFS.exists(modelPath);
    if (!exists) {
      await RNFS.downloadFile({
        fromUrl: modelSrc,
        toFile: modelPath,
      }).promise;
    }

    setLocalModelPath(modelPath);
  };

  React.useEffect(() => {
    if(!isLoading && data && data.id && data.model){
      loadPath()
    }
  }, [data]);

  const takeSnapshot = () => {
    ref.current?.takeScreenshot().then(async (base64Image) => {
      const date = new Date();
      const filePath = `${
        RNFS.CachesDirectoryPath
      }/arscreenshot-${date.getFullYear()}-${date.getMonth()}-${date.getDay()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.jpg`;
      await RNFS.writeFile(filePath, base64Image, 'base64');
      console.log('Screenshot written to ' + filePath);
    });
  };

  const reset = () => {
    ref.current?.reset();
  };

  const rotate = () => {
    ref.current?.rotate(0, 25, 0);
  };

  const mountUnMount = () => setShowArView(!showArView);

  return (
    <View style={styles.container}>
      {localModelPath && showArView && (
        <ArViewerView
          model={localModelPath}
          style={styles.arView}
          manageDepth
          allowTranslate
          lightEstimation
          disableInstantPlacement
          allowScale
          onStarted={() => console.log('started')}
          onEnded={() => console.log('ended')}
          onModelPlaced={() => console.log('model displayed')}
          onModelRemoved={() => console.log('model not visible anymore')}
          ref={ref}
          planeOrientation='horizontal'
        />
      )}
      <View style={styles.footer}>
        <TouchableHighlight onPress={takeSnapshot} style={styles.button}>
          <Text>Take Snapshot</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={mountUnMount} style={styles.button}>
          <Text>{showArView ? 'Unmount' : 'Mount'}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={reset} style={styles.button}>
          <Text>Reset</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={rotate} style={styles.button}>
          <Text>Rotate</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  arView: {
    flex: 2,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  button: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
  },
});