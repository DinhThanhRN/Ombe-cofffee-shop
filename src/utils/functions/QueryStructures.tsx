type Operator =
  | 'LESS_THAN'
  | 'LESS_THAN_OR_EQUAL'
  | 'GREATER_THAN'
  | 'GREATER_THAN_OR_EQUAL'
  | 'EQUAL'
  | 'NOT_EQUAL'
  | 'IN';

interface QueryProps {
  collectionId: string;
  operator: Operator;
  queryBy: string;
  value: any;
}

const queryStructure = ({
  collectionId,
  operator,
  queryBy,
  value,
}: QueryProps) => {
  return {
    structuredQuery: {
      from: [
        {
          collectionId: collectionId,
        },
      ],
      where: {
        fieldFilter: {
          field: {
            fieldPath: queryBy,
          },
          op: operator,
          value: {
            stringValue: value,
          },
        },
      },
    },
  };
};
const queryManyStructure = ({
  collectionId,
  queryBy,
  operator,
  value,
}: QueryProps) => {
  const valueQuery = value.map((item: string) => {
    return {
      stringValue: item,
    };
  });
  return {
    structuredQuery: {
      from: [
        {
          collectionId: collectionId,
        },
      ],
      where: {
        fieldFilter: {
          field: {
            fieldPath: queryBy,
          },
          op: operator,
          value: {
            arrayValue: {
              values: valueQuery,
            },
          },
        },
      },
    },
  };
};

export {queryStructure, queryManyStructure};
