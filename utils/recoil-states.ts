import { atom, selector } from "recoil";

export const imageTextState = atom({
    key: 'imageTextState',
    default: 'Reach 100 global uses'
});

export const maxValueState = atom({
    key: 'maxValueState',
    default: 100
});

export const currentValueState = atom({
    key: 'currentValueState',
    default: 10
});

export const percentageState = selector({
    key: 'percentageState',
    get: ({get}) => {
        const currentValue = get(currentValueState);
        const maxValue = get(maxValueState);

        return (currentValue / maxValue) * 100;
    }
});