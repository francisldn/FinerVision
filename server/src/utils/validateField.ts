export const validateName = (name: string) => {
    if (!name || typeof name !== 'string') {
        return false;
    }
    if (/<[a-z][\s\S]*>/gi.test(name)) {
        return false;
    }

    return true;
};

export const validateEmail = (email: string) => {
    if (!email || typeof email !== 'string' || !email.includes('@')) {
        return false;
    }
    if (/<[a-z][\s\S]*>/gi.test(email)) {
        return false;
    }
    console.log(/^[^\s@]+@[^\s@]+\.[^\s@]+$/gi.test(email));
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/gi.test(email) === false) {
        return false;
    }
    return true;
};

export const validatePhoneNumber = (phoneNumber: number) => {
    // if not a number return false
    if (!Number(phoneNumber)) return false;
    if (/<[a-z][\s\S]*>/gi.test(phoneNumber.toString())) {
        return false;
    }
    return true;
};

// note month input starts from 1
export const validateDob = (day: number, month: number, year: number) => {
    if (!day || typeof day !== 'number' || day <= 0 || day > 31) return false;
    if (!month || typeof month !== 'number' || month <= 0 || month > 12) return false;
    if (!year || typeof year !== 'number' || year < 1900 || year > new Date().getFullYear()) return false;
    // February
    if (month === 2) {
        if (year % 4 === 0) {
            if (day > 29) return false;
        } else {
            if (day > 28) return false;
        }
    }
    if (month === 4 || month === 6 || month === 9 || month === 11) {
        if (day > 30) return false;
    }

    const dob = new Date(year, month - 1, day);
    if (!(dob instanceof Date) || isNaN(dob.getTime())) return false;
    return true;
};

export const validateComment = (textAreaInput: string) => {
    if (typeof textAreaInput !== 'string') return false;
    if (/<[a-z][\s\S]*>/gi.test(textAreaInput)) {
        return false;
    }
    return true;
};

export const validateFullDob = (dob: Date) => {
    if (!(dob instanceof Date) || isNaN(dob.getTime())) return false;
    return true;
};

export const validateGender = (gender: string) => {
    if (!gender) return false;
    return true;
};
