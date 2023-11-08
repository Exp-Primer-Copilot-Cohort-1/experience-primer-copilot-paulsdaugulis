function skillsMember (member) {
  return {
    id: member.id,
    name: member.name,
    email: member.email,
    skills: member.skills.map(skill => skill.name)
  }
}