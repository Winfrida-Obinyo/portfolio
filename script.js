
function showSkill(skillId) {
  var skillSections = document.getElementsByClassName('skill-section');
  for (var i = 0; i < skillSections.length; i++) {
    skillSections[i].style.display = 'none';
  }
  document.getElementById(skillId).style.display = 'block';
}
