import * as cdk from 'aws-cdk-lib';
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsCdkExampleQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    const itemTable = new Table(this, "itemTable", {
      partitionKey: {
        name: "pk",
        type: AttributeType.STRING,
      },
      // 以下を設定することでcdk destroyコマンド実行時にスタックを削除することができる。
      removalPolicy: cdk.RemovalPolicy.DESTROY
    })

    
    const func = new NodejsFunction(this,"tsFunction",{
      entry: "lib/helloWorld.ts",
      runtime:Runtime.NODEJS_18_X,
      environment: {
        ITEM_TABLE_NAME: itemTable.tableName
      }
    })
    // アクセス元のスタック名を指定し、引数にアクセス許可する対象のスタックを記述する
    itemTable.grantReadData(func)
  }
}
