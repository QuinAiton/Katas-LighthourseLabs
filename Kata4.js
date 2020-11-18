const instructorWithLongestName = (instructors) => {
  let count = 0;
  let longestName;
  for (const instructor of instructors) {
    if (instructor.name.length > count) {
      count = instructor.name.length
      longestName = instructor;
    }
  }
  return longestName;
}