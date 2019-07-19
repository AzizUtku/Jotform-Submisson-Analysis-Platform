/* eslint-disable no-useless-escape */
import React from 'react';
import PropTypes from 'prop-types';
import { materialColors, stopWords } from '../../../constants/constants';
import './WordCloud.css';

const propTypes = {
  text: PropTypes.string.isRequired,
  minSize: PropTypes.number.isRequired,
  maxSize: PropTypes.number.isRequired,
  maxAmount: PropTypes.number.isRequired,
};

class WordCloud extends React.Component {
  parseString = (str) => {
    const parsedStr = str
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
      .toLowerCase()
      .replace(stopWords, '');

    const wordFrequency = {};
    const arr = parsedStr.split(' ');
    arr.forEach((word) => {
      if (word in wordFrequency) {
        wordFrequency[word] += 1;
      } else {
        wordFrequency[word] = 1;
      }
    });

    const freqArr = [];
    Object.keys(wordFrequency).forEach((key) => {
      freqArr.push({ word: key, freq: wordFrequency[key] });
    });

    freqArr.sort((a, b) => {
      if (a.freq < b.freq) {
        return 1;
      }
      if (a.freq > b.freq) {
        return -1;
      }
      return 0;
    });

    return freqArr;
  };

  shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      // eslint-disable-next-line no-param-reassign
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  render() {
    const {
      minSize, maxSize, text, maxAmount,
    } = this.props;

    let wordArr = this.parseString(text.trim());

    let content;
    if (wordArr.length > 0) {
      const minFreq = wordArr[wordArr.length - 1].freq;
      const maxFreq = wordArr[0].freq;

      // Shuffle array
      wordArr = this.shuffle(wordArr.slice(0, maxAmount));

      content = wordArr.map((element) => {
        const fontSize = `${minSize
          + ((maxSize - minSize) * (element.freq - minFreq)) / (maxFreq - minFreq)}px`;
        const fontWeight = element.freq === maxFreq ? '400' : '300';
        const color = materialColors[Math.floor(Math.random() * materialColors.length)];
        return (
          <div
            key={element.word + element.freq}
            className="word-cloud"
            style={{
              fontSize, color, fontWeight,
            }}
          >
            {element.word}
            <span className="tooltiptext">{`${element.word} (${element.freq})`}</span>
          </div>
        );
      });
    }
    return <div className="words-parent">{content}</div>;
  }
}

WordCloud.propTypes = propTypes;
export default WordCloud;
