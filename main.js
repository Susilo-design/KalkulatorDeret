document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('geometry-form');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const shape = document.getElementById('shape').value;
        let resultText = '';

        switch (shape) {
            case 'geometric-sequence':
                resultText = calculateGeometricSequence();
                break;
            case 'arithmetic-sequence':
                resultText = calculateArithmeticSequence();
                break;
            case 'infinite-geometric-sequence':
                resultText = calculateInfiniteGeometricSequence();
                break;
        }

        result.textContent = resultText;
    });

    document.getElementById('shape').addEventListener('change', function() {
        const shape = this.value;
        document.querySelectorAll('.input-field').forEach(field => field.style.display = 'none');
        document.querySelectorAll(`.${shape}`).forEach(field => field.style.display = 'block');
    });

    function calculateGeometricSequence() {
        const firstTerm = parseFloat(document.getElementById('first-term').value);
        const commonRatio = parseFloat(document.getElementById('common-ratio').value);
        const numberOfTerms = parseInt(document.getElementById('number-of-terms').value);
        let sequence = [firstTerm];

        for (let i = 1; i < numberOfTerms; i++) {
            sequence.push(sequence[i - 1] * commonRatio);
        }

        return `Deret geometri adalah: ${sequence.map((term, index) => `Suku ke-${index + 1}: ${term}`).join(', ')}`;
    }

    function calculateArithmeticSequence() {
        const firstTerm = parseFloat(document.getElementById('first-term-arithmetic').value);
        const commonDifference = parseFloat(document.getElementById('common-difference').value);
        const numberOfTerms = parseInt(document.getElementById('number-of-terms-arithmetic').value);
        let sequence = [firstTerm];

        for (let i = 1; i < numberOfTerms; i++) {
            sequence.push(sequence[i - 1] + commonDifference);
        }

        return `Deret aritmatika adalah: ${sequence.map((term, index) => `Suku ke-${index + 1}: ${term}`).join(', ')}`;
    }

    function calculateInfiniteGeometricSequence() {
        const firstTerm = parseFloat(document.getElementById('first-term-infinite').value);
        const commonRatio = parseFloat(document.getElementById('common-ratio-infinite').value);

        if (Math.abs(commonRatio) < 1) {
            const sum = firstTerm / (1 - commonRatio);
            return `Jumlah deret geometri tak hingga adalah: ${sum.toFixed(2)}`;
        } else {
            return 'Rasio umum harus kurang dari 1 untuk deret geometri tak hingga.';
        }
    }
});
