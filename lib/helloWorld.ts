import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

const ddlClient = new DynamoDBClient({});

const listItem = async (tableName: string) => {
    const command = new ScanCommand({
        TableName: tableName,
    })
    return (await ddlClient.send(command)).Items;
}

export const handler =async () => {
    // DynamoDBテーブルの名前は環境変数から取得する
    const itemTableName = process.env.ITEM_TABLE_NAME;
    return await listItem(itemTableName);
}