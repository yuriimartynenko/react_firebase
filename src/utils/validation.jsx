const validate = (user) => {
    const errors = {};
    const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!user.email) {
        errors.email = 'Будь ласка, введіть свій email';
    } else if (!validEmail.test(user.email)) {
        errors.email = 'Невалідний email адрес';
    }
    if (!user.firstName || user.firstName.length < 3) {
        errors.firstName = 'Будь ласка, введіть своє ім\'я';
    }
    if (!user.lastName || user.lastName.length < 3) {
        errors.lastName = 'Будь ласка, введіть своє прізвище';
    }
    if (!user.password) {
        errors.password = 'Будь ласка, введіть свій пароль';
    }
    if (user.password && user.password.length < 8) {
        errors.password = 'Пароль повинен бути не менше 8 символів';
    }
    return errors;
};

export default validate;