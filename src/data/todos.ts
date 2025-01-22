import { Todo } from '@/types/todo'

const generateUniqueId = () => {
    return Date.now() + Math.random(); // 結合當前時間和隨機數
};

export const dummyData: Todo[] = [
    { id: generateUniqueId(), title: 'Buy groceries 🎂👍', completed: false },
    { id: generateUniqueId(), title: 'Walk the dog 🐕💦', completed: true },
    { id: generateUniqueId(), title: 'Finish project report 📄📊', completed: false },
    { id: generateUniqueId(), title: 'Read a book 📚👓', completed: true },
    { id: generateUniqueId(), title: 'Exercise 🏋️‍♂️💪', completed: false },
    { id: generateUniqueId(), title: 'Call mom 📞👵', completed: true },
    { id: generateUniqueId(), title: 'Plan vacation 🏖️🗺️', completed: false },
    { id: generateUniqueId(), title: 'Clean the house 🧹💪', completed: true },
    { id: generateUniqueId(), title: 'Attend meeting 🗓️📝', completed: false },
    { id: generateUniqueId(), title: 'Buy a gift 🎁🎁', completed: true }
];