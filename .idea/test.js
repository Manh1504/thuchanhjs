function countWords() {
    const inputText = document.getElementById('textInput').value;

    // Chuyển thành chữ thường và loại bỏ ký tự đặc biệt
    const cleanedText = inputText.toLowerCase().replace(/[^a-z0-9\s]/g, '');
    const words = cleanedText.split(/\s+/);

    const wordCount = {};

    words.forEach(word => {
        if (word) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    });

    // Hiển thị kết quả
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "<h3>Kết quả:</h3>";
    for (let word in wordCount) {
        resultDiv.innerHTML += `<p><strong>${word}</strong>: ${wordCount[word]}</p>`;
    }
}