import stats from './stats.js'
import character from './characterSheet.js'
import data from './data.js'

const statBlock = document.querySelector('#stat_container')

// generates random stats within thresholds determined by class selected when Roll Stats btn clicked
const rollStats = document.querySelector('#stat_roll').addEventListener('click', event => {
    let classSelected = document.querySelector('#class_select').value
    stats.statHTMLtoDOM(stats.statObjectToHTML(stats[`create${classSelected}`]()))
})

const saveCharacter = document.querySelector('#character_save').addEventListener('click', event => {
    let name = document.querySelector('#char_name').value
    let classSelected = document.querySelector('#class_select').value
    let personality = document.querySelector('#personality_select').value
    let charStats = character.statHTMLtoObject(document.querySelector('#stat_container').textContent)
    data.saveCharToDatabase(character.createCharacter(name, classSelected, personality, charStats));
})

export default {rollStats, saveCharacter}