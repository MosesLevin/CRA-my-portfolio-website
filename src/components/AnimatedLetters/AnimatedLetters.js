import './AnimatedLetters.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    // we want it to be an inline element so span
    // we take the strArray we recieved as props (letter strings) and map over them. having a 'char' which is the letter iterated over,
    // and i, which is the iteration number, we then give each char a span and a className which is comprised of the current state of
    // the letter, which is defaulted to 'text-animate', plus the idx(we set it to 15) and the iteration i are added.
    // each letter will have the class name 'text-animate_15','text-animate_16',.... in the order we map over them
    strArray.map((char, i) => (
      <span key={char + i} className={`${letterClass} _${i + idx}`}>
        {char}
      </span>
    ))
  )
}

export default AnimatedLetters
