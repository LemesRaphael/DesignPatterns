export default class Token {
    private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Imhjb2RlIHRyZWluYW1lbnRvcyIsImlhdCI6MTUxNjIzOTAyMn0.ZyuEaTn2a3id8PUeMU4vCJoS0M3x63gTio9dTlH8Y0o";

    getToken(): string {
        return  this.token
    }
}