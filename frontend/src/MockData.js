// MockData.js

//FOR TESTING PURPOSES ONLY
//FOR TESTING PURPOSES ONLY
//FOR TESTING PURPOSES ONLY

//old array
/*const patients = [
  { id: 1, name: 'John Doe', age: 30, gender: 'Male', condition: 'Fever' },
  { id: 2, name: 'Jane Smith', age: 25, gender: 'Female', condition: 'Headache' },
  { id: 3, name: 'Michael Johnson', age: 45, gender: 'Male', condition: 'Back Pain' },
  { id: 4, name: 'Emily Brown', age: 35, gender: 'Female', condition: 'Migraine' },
  { id: 5, name: 'David Wilson', age: 28, gender: 'Male', condition: 'Allergy' },
  { id: 6, name: 'Sarah Davis', age: 50, gender: 'Female', condition: 'Arthritis' },
  { id: 7, name: 'Robert Martinez', age: 65, gender: 'Male', condition: 'High Blood Pressure' },
  { id: 8, name: 'Jennifer Taylor', age: 40, gender: 'Female', condition: 'Asthma' },
  { id: 9, name: 'William Anderson', age: 55, gender: 'Male', condition: 'Diabetes' },
  { id: 10, name: 'Jessica Thomas', age: 22, gender: 'Female', condition: 'Anxiety' },
  { id: 11, name: 'Daniel Garcia', age: 33, gender: 'Male', condition: 'Depression' },
  { id: 12, name: 'Megan Rodriguez', age: 29, gender: 'Female', condition: 'Insomnia' },
  { id: 13, name: 'Joseph Hernandez', age: 60, gender: 'Male', condition: 'Heart Disease' },
  { id: 14, name: 'Amanda Martinez', age: 27, gender: 'Female', condition: 'Stomach Ulcer' },
  { id: 15, name: 'Matthew Lee', age: 38, gender: 'Male', condition: 'Acid Reflux' },
  { id: 16, name: 'Nicole Clark', age: 42, gender: 'Female', condition: 'Fibromyalgia' },
  { id: 17, name: 'Christopher Walker', age: 48, gender: 'Male', condition: 'Obesity' },
  { id: 18, name: 'Kimberly Hall', age: 31, gender: 'Female', condition: 'Migraine' },
  { id: 19, name: 'Ryan Allen', age: 36, gender: 'Male', condition: 'High Cholesterol' },
  { id: 20, name: 'Lauren Young', age: 24, gender: 'Female', condition: 'Asthma' },
  { id: 21, name: 'Joshua Brown', age: 28, gender: 'Male', condition: 'Back Pain' },
  { id: 22, name: 'Samantha White', age: 33, gender: 'Female', condition: 'Migraine' },
  { id: 23, name: 'Andrew Thompson', age: 50, gender: 'Male', condition: 'Allergy' },
  { id: 24, name: 'Emma Baker', age: 40, gender: 'Female', condition: 'Arthritis' },
  { id: 25, name: 'James Wright', age: 55, gender: 'Male', condition: 'High Blood Pressure' },
  { id: 26, name: 'Olivia Evans', age: 25, gender: 'Female', condition: 'Asthma' },
  { id: 27, name: 'Liam Brooks', age: 45, gender: 'Male', condition: 'Diabetes' },
  { id: 28, name: 'Charlotte Harris', age: 30, gender: 'Female', condition: 'Anxiety' },
  { id: 29, name: 'Benjamin Turner', age: 35, gender: 'Male', condition: 'Depression' },
  { id: 30, name: 'Amelia Clark', age: 28, gender: 'Female', condition: 'Insomnia' },
  { id: 31, name: 'Lucas Hughes', age: 60, gender: 'Male', condition: 'Heart Disease' },
  { id: 32, name: 'Ella Scott', age: 27, gender: 'Female', condition: 'Stomach Ulcer' },
  { id: 33, name: 'Alexander Young', age: 38, gender: 'Male', condition: 'Acid Reflux' },
  { id: 34, name: 'Mia Green', age: 42, gender: 'Female', condition: 'Fibromyalgia' },
  { id: 35, name: 'Jacob Adams', age: 48, gender: 'Male', condition: 'Obesity' },
  { id: 36, name: 'Ava Carter', age: 31, gender: 'Female', condition: 'Migraine' },
  { id: 37, name: 'William Wright', age: 36, gender: 'Male', condition: 'High Cholesterol' },
  { id: 38, name: 'Grace Baker', age: 24, gender: 'Female', condition: 'Asthma' },
  { id: 39, name: 'Daniel Hill', age: 29, gender: 'Male', condition: 'Back Pain' },
  { id: 40, name: 'Sophia King', age: 35, gender: 'Female', condition: 'Migraine' },
  { id: 41, name: 'Logan Cooper', age: 32, gender: 'Male', condition: 'Allergy' },
  { id: 42, name: 'Isabella Bailey', age: 39, gender: 'Female', condition: 'Arthritis' },
  { id: 43, name: 'Jackson Murphy', age: 47, gender: 'Male', condition: 'High Blood Pressure' },
  { id: 44, name: 'Sophie Foster', age: 26, gender: 'Female', condition: 'Asthma' },
  { id: 45, name: 'Liam Kelly', age: 44, gender: 'Male', condition: 'Diabetes' },
  { id: 46, name: 'Madison Richardson', age: 29, gender: 'Female', condition: 'Anxiety' },
  { id: 47, name: 'Oliver Cox', age: 37, gender: 'Male', condition: 'Depression' },
  { id: 48, name: 'Emily Ward', age: 31, gender: 'Female', condition: 'Insomnia' },
  { id: 49, name: 'Lucas Long', age: 56, gender: 'Male', condition: 'Heart Disease' },
  { id: 50, name: 'Amelia Fox', age: 28, gender: 'Female', condition: 'Stomach Ulcer' },
  // Add more patient objects as needed
];*/

const patients = [
  { id: 1, name: 'John Doe', age: 30, gender: 'Male', condition: ['Fever', 'Cold', 'Cough'] },
  { id: 2, name: 'Jane Smith', age: 25, gender: 'Female', condition: ['Headache', 'Fever', 'Sore Throat'] },
  { id: 3, name: 'Michael Johnson', age: 45, gender: 'Male', condition: ['Back Pain', 'Muscle Strain', 'Sprain'] },
  { id: 4, name: 'Amelia Brown', age: 35, gender: 'Female', condition: ['Migraine', 'Headache', 'Tension'] },
  { id: 5, name: 'David Wilson', age: 28, gender: 'Male', condition: ['Allergy', 'Hay Fever', 'Skin Rash'] },
  { id: 6, name: 'Sarah Davis', age: 50, gender: 'Female', condition: ['Arthritis', 'Joint Pain', 'Inflammation'] },
  { id: 7, name: 'Robert Martinez', age: 65, gender: 'Male', condition: ['High Blood Pressure', 'Hypertension', 'Cardiovascular Disease'] },
  { id: 8, name: 'Jennifer Taylor', age: 40, gender: 'Female', condition: ['Asthma', 'Bronchitis', 'Respiratory Infection'] },
  { id: 9, name: 'William Anderson', age: 55, gender: 'Male', condition: ['Diabetes', 'Type 2 Diabetes', 'Insulin Resistance'] },
  { id: 10, name: 'Alex Adams', age: 22, gender: 'Male', condition: ['Anxiety', 'Depression', 'Stress'] },
];

export default patients;

