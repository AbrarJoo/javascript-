function getAverage(grades) {
  let sum = 0;
  for (let grade of grades) {
    sum += grade;
  }
  let avg = sum / grades.length;
  return avg;
}

function getGrade(score) {
  let grade;
  if (score === 100) {
    grade = "A+";
  } else if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  return grade;
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(scores, studentScore) {
  let average = getAverage(scores);
  let grade = getGrade(studentScore);
  if (hasPassingGrade(studentScore)) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}
