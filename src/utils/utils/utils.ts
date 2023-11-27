import { template, crush } from 'radash'
import translationData from 'locale/error.json'

const translate = (
    key: string,
    templateData: { [key: string]: string } = {}
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    console.log("Key", key);
    console.log(templateData);
    return template(crush(translationData)[key], templateData);
  };

export {
    translate
}