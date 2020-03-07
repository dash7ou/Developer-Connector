export default (profiles , { text })=>{
    return profiles.filter(profile =>{
        const textMatch = profile.user.name.toLowerCase().includes(text);

        return textMatch;
    })
}