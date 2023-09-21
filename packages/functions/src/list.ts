import { Table } from 'sst/node/table'
import handler from '@notes/core/handler'
import dynamodb from '@notes/core/dynamodb'

export const main = handler(async event => {
  const params = {
    TableName: Table.Notes.tableName,
    KeyConditionExpression: 'userId = :userId',
    ExpressionAttributeValues: {
      ':userId': '123',
    },
  }

  const result = await dynamodb.query(params)

  return JSON.stringify(result.Items)
})
