
export function send_email() {
    if(localStorage.mail){
        console.log("メールアドレスが存在します");
        Email.send({
            SecureToken: "",
            To : localStorage.mail,
            From : "umbrella.remainder@gmail.com",
            Subject : "雨が降りそうです！",
            Body : "お出かけ途中に失礼します！\n1時間以内に雨が降りそうですので、傘を持っていきませんか？"
        }).then(
            message => console.log(message)
        );
    }else {
        console.log("メールアドレスが存在しません");
    }
}