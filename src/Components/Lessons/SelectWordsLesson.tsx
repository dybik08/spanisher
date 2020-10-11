import React, { useState } from 'react';

let words = ['es', 'mi', 'madre', 'Esta'];
const correctSentence = 'Esta es mi madre';

const SelectWordsLesson = () => {
    const [answers, setAnwsers] = useState<string[]>(Array.from({ length: words.length }));

    const renderAnswers = Array.from({ length: 4 }).map((el, index) => (
        <p
            style={{
                width: '50px',
                borderBottom: !answers[index] ? '1px solid black' : undefined,
                margin: '30px 40px',
            }}
        >
            {answers[index] || ''}
        </p>
    ));

    const onAnswerButtonPress = (value: string, index: number) => {
        setAnwsers((prevState: string[]) => {
            const newAnswers = [...prevState];
            if (!answers[0]) {
                newAnswers[0] = value;
            } else if (!answers[1]) {
                newAnswers[1] = value;
            } else if (!answers[2]) {
                newAnswers[2] = value;
            } else if (!answers[3]) {
                newAnswers[3] = value;
            }

            return newAnswers;
        });
    };

    const renderAnswerButtons = words.map((word, index) => (
        <button
            onClick={(event: React.MouseEvent<HTMLButtonElement> & { target: HTMLInputElement }) => {
                onAnswerButtonPress(word, index)
                words = words.filter(w => w !== word)
            }

            }
            value={'es'}
            style={{ margin: '0px 10px' }}
        >
            {word}
        </button>
    ));

    const checkExercise = () => {
        const isCorrect = answers.join(' ') === correctSentence;

        return setTimeout(() => alert(isCorrect ? 'Gratz!' : 'Try again!'));
    };

    return (
        <>
            <h2>Translate sentence</h2>
            <h2>This is my mother</h2>
            <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', justifyContent: 'center' }}>
                {renderAnswers}
            </div>
            <div>{renderAnswerButtons}</div>
            {answers.every(answer => answer) && (
                <div style={{ marginTop: '30px' }}>
                    <button onClick={checkExercise}>Check execrice</button>
                </div>
            )}
        </>
    );
};

export default SelectWordsLesson;
