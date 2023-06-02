import * as cdk from 'aws-cdk-lib';
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
    new NodejsFunction(this,"tsFunction",{
      entry: "lib/helloworld.ts",
      runtime:Runtime.NODEJS_18_X
    })
  }
}
