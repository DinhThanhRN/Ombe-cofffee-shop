import {formatTypeField} from './formatTypeField';

const tranferCategoryDataToInputFormat = (
  name: string,
  icon: string,
  menus: number,
) => {
  return {
    fields: {
      name: formatTypeField(name),
      icon: formatTypeField(icon),
      menus: formatTypeField(menus),
    },
  };
};

interface CategoryOutput {
  name: any;
  icon: any;
  menus: any;
}

const tranferCategoryDataToUsableCategory = (data: CategoryOutput) => {
  const {name: nameObj, icon: iconObj, menus: menusObj} = data;
  const name = nameObj.stringValue;
  const icon = iconObj?.stringValue;
  const menus = +menusObj?.integerValue;
  return {name, icon, menus};
};

export {tranferCategoryDataToInputFormat, tranferCategoryDataToUsableCategory};
export type {CategoryOutput};
