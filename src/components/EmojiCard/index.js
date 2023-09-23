// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-list">
      <button type="button" className="button" onClick={onClickEmojiCard}>
        <img src={emojiUrl} alt={emojiName} className="image" />
      </button>
    </li>
  )
}

export default EmojiCard
