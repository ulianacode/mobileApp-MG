export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length > 255) {
        console.log('Почта содержит не более 255 символов');
        return 'Почта содержит не более 255 символов';
    } else if (!emailRegex.test(email)) {
        console.log('Введенная почта имеет неверный формат');
        return 'Введенная почта имеет неверный формат';
    }
    return '';
};

export const validateUsername = (username) => {
    if (username.length > 32) {
        console.log('Логин содержит не более 32 символов');
        return 'Логин содержит не более 32 символов';
    } else if (username.length < 5) {
        console.log('Логин содержит не менее 5 символов');
        return 'Логин содержит не менее 5 символов';
    }
    return '';
};

export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (password.length > 32) {
        console.log('Пароль содержит не более 32 символов');
        return 'Пароль содержит не более 32 символов';
    } else if (password.length < 6) {
        console.log('Пароль содержит не менее 6 символов');
        return 'Пароль содержит не менее 6 символов';
    } else if (!passwordRegex.test(password)) {
        console.log('Пароль должен содержать минимум одну букву и одну цифру');
        return 'Пароль должен содержать минимум одну букву и одну цифру';
    }
    return '';
};