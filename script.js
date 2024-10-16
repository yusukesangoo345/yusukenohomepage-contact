document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルトの送信を防ぐ

    // フォームの入力値を取得
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // アラートを表示
    alert(`お問い合わせありがとうございました！\n名前: ${name}\nメール: ${email}\nメッセージ: ${message}`);

    // フォームをリセット
    this.reset();
});
