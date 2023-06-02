# lambda × apiGateway × DynamoDBプロジェクト
以下のサイトを参考に、チュートリアルとして作成したリポジトリです。

## プロジェクトの情報

以下のコマンドを実行しプロジェクトを作成
```shell
$ npx aws-cdk@2 init app --language typescript
```

プロジェクト構成
```
$ tree -I node_modules --dirsfirst
.
├── bin
│   └── aws-cdk-example.ts
├── lib
│   └── aws-cdk-example-stack.ts
├── test
│   └── aws-cdk-example.test.ts
├── README.md
├── cdk.json
├── jest.config.js
├── package-lock.json
├── package.json
└── tsconfig.json
```


# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
