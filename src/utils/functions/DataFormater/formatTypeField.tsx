const formatTypeField = (value: any): any => {
  if (Array.isArray(value)) {
    const result = value.map(item => {
      return formatTypeField(item);
    });
    return {
      arrayValue: {values: result},
    };
  } else if (Number.isInteger(value)) return {integerValue: value};
  else if (Number.isFinite(value)) return {doubleValue: value};
  else if (Date.parse(value)) return {timestampValue: value};
  return {[`${typeof value}Value`]: value};
};

export {formatTypeField};
