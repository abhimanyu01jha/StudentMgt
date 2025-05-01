function printPattern() {
    let pattern = [];
    let rows = [1, 2, 1, 2, 3, 2, 3, 2, 1, 2, 1];
    
    for (let i = 0; i < rows.length; i++) {
        pattern.push('*'.repeat(rows[i])); 
    }

    console.log(pattern.join('\n'));
}

printPattern();