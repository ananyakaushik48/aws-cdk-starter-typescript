import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'ap-south-1_vSAnMlIyV',
    ClientId: '64on2b1s79cftg2hg2p0312c3'
}

export default new CognitoUserPool(poolData);
