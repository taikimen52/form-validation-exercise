
const rules = {
    // inputのname属性をキーにする
    // キーを判定してルールと照らし合わせる
    email: {
        messages: {
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
            patternMismatch: "半角英数字と記号を全て含んでください。",
            tooShort: "8文字以上で入力してください。",
            tooLong: "16文字以内で入力してください。"
        },
        validate: () => {

        }
    },
    passwordVerif: {
        message: {
            patternMismatch: "半角英数字と記号を全て含んでください。",
            tooShort: "8文字以上で入力してください。",
            tooLong: "16文字以内で入力してください。"
        },
        validate: () => {

        }
    }
}

function validateField(field) {   

    const name = field.name;
    const rule = rules[name];

    const targetError = document.querySelector(`.error-message.${name}`);

    // まずHTML5のバリデーションを走らせる。（メッセージはrules内に記述）
    if(field.validity.valueMissing) {
        field.setCustomValidity(rule.messages.valueMissing);
    } else if(field.validity.typeMismatch) {
        targetError.textContent = rule.messages.typeMismatch;
    } else if(field.validity.patternMismatch) {
        targetError.textContent = rule.message.patternMismatch;
    } else if(field.validity.tooShort) {
        targetError.textContent = rule.messages.tooShort;
    } else if(field.validity.tooLong) {
        targetError.textContent = rule.messages.tooLong;
    } else {
        targetError.textContent = "";
    }

    // その後、独自ルールを走らせる
    // if(rule[validate]) {
        
    // }

    // 結果の反映
}

export {rules, validateField};