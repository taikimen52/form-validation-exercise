
const rules = {
    // inputのname属性をキーにする
    // キーを判定してルールと照らし合わせる
    email: {
        message: {
            valueMissing: "必須項目です",
            typeMismatch: "正しい形式で入力してください",
        }
    },
    country: {
        message: {
            patternMismatch:  "半角英字で入力してください。"
        }
    },
    postalcode: {
        message: {
            patternMismatch: "半角数字ハイフンありで入力してください。"
        }
    },
    password: {
        message: {
            valueMissing: "必須項目です",
            patternMismatch: "小文字、大文字、数字を含む半角英数8桁以上16桁以下で入力してください。",
            tooShort: "8文字以上で入力してください。",
            tooLong: "16文字以内で入力してください。"
        }
    },
    passwordverif: {
        message: {
            valueMissing: "必須項目です"
        },
        validate: (field) => {
            const password = document.querySelector("input[name=password]")

            if(field.value != password.value) {
                const targetError = document.querySelector(`.error-message.${field.name}`);
                targetError.textContent = "パスワードが一致しません";
            }
        }
    }
}

// input fieldのバリデーション
function validateField(field) {   

    const name = field.name;
    const rule = rules[name];

    const targetError = document.querySelector(`.error-message.${name}`);

    // まずHTML5のバリデーションを走らせる。（メッセージはrules内に記述）
    if(field.validity.valueMissing) {
        targetError.textContent = rule.message.valueMissing;
    } else if(field.validity.typeMismatch) {
        targetError.textContent = rule.message.typeMismatch;
    } else if(field.validity.patternMismatch) {
        targetError.textContent = rule.message.patternMismatch;
    } else if(field.validity.tooShort) {
        targetError.textContent = rule.message.tooShort;
    } else if(field.validity.tooLong) {
        targetError.textContent = rule.message.tooLong;
    } else {
        targetError.textContent = "";
    }

    // その後、独自ルールを走らせる
    if(rule.validate) {
        rule.validate(field)
    }

    // 結果の反映
}

// submit時にfield全てを走査するバリデーション
function validateForm(form) {
    const fields = Array.from(form.elements)
        .filter(el =>
            el instanceof HTMLInputElement 
            || el instanceof HTMLSelectElement 
            || el instanceof HTMLTextAreaElement);

    for(const f of fields) {
        validateField(f)
    }
}

export {validateField, validateForm};