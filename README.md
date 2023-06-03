# lambda × apiGateway × DynamoDBプロジェクト
以下のサイトを参考に、チュートリアルとして作成したリポジトリです。

https://eh-career.com/engineerhub/entry/2023/04/27/093000

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

## デプロイ
以下コマンドでデプロイされているリソースとローカルに定義されているスタックの差分を確認することができる


```shell
$ npm run cdk diff       
```

<details>
<summary>詳しい実行のサンプル</summary>

```
> aws-cdk-example@0.1.0 cdk
> cdk --profile personal_develop diff

Bundling asset AwsCdkExampleStack/tsFunction/Code/Stage...

  cdk.out/bundling-temp-68870271ee22c076457d4bca0dbb48d9e9da5069868394504b096640753bab97/index.js  1.1kb

⚡ Done in 11ms
Stack AwsCdkExampleStack
IAM Statement Changes
┌───┬──────────────────┬────────┬─────────────────────────────────────────────────────────────┬──────────────────────────────────────────────────────────────┬───────────┐
│   │ Resource         │ Effect │ Action                                                      │ Principal                                                    │ Condition │
├───┼──────────────────┼────────┼─────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────┼───────────┤
│ + │ ${itemTable.Arn} │ Allow  │ dynamodb:BatchGetItem                                       │ AWS:${tsFunction/ServiceRole}                                │           │
│   │                  │        │ dynamodb:ConditionCheckItem                                 │                                                              │           │
│   │                  │        │ dynamodb:DescribeTable                                      │                                                              │           │
│   │                  │        │ dynamodb:GetItem                                            │                                                              │           │
│   │                  │        │ dynamodb:GetRecords                                         │                                                              │           │
│   │                  │        │ dynamodb:GetShardIterator                                   │                                                              │           │
│   │                  │        │ dynamodb:Query                                              │                                                              │           │
│   │                  │        │ dynamodb:Scan                                               │                                                              │           │
└───┴──────────────────┴────────┴─────────────────────────────────────────────────────────────┴──────────────────────────────────────────────────────────────┴───────────┘
(NOTE: There may be security-related changes not in this list. See https://github.com/aws/aws-cdk/issues/1299)

Resources
[+] AWS::IAM::Policy tsFunction/ServiceRole/DefaultPolicy tsFunctionServiceRoleDefaultPolicy58AF27B8 
[~] AWS::Lambda::Function tsFunction tsFunction16BFBC6C 
 └─ [~] DependsOn
     └─ @@ -1,3 +1,4 @@
        [ ] [
        [+]   "tsFunctionServiceRoleDefaultPolicy58AF27B8",
        [ ]   "tsFunctionServiceRole74F0127B"
        [ ] ]
```

</details>

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