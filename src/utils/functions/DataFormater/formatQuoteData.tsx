import {formatTypeField} from './formatTypeField';

interface Quote {
  name: any;
  content?: any;
  composer?: any;
}

const tranferQuoteDataToInputFormat = ({name, content, composer}: Quote) => {
  return {
    fields: {
      name: formatTypeField(name),
      content: formatTypeField(content),
      composer: formatTypeField(composer),
    },
  };
};

const tranferQuoteDataToUsableQuote = (quote: Quote) => {
  const {name: nameObj, content: contentObj, composer: composerObj} = quote;
  return {
    name: nameObj.stringValue,
    content: contentObj.stringValue,
    composer: composerObj.stringValue,
  };
};

export {tranferQuoteDataToInputFormat, tranferQuoteDataToUsableQuote};
export type {Quote};
