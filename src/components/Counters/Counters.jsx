import {useRecoilState} from "recoil";
import {counters} from "../../lib/recoil/atoms";
import React, {useState} from "react";
import {Row, Col, Container} from '../../lib/bootstrap';
import countersStyle from './counters.module.scss';

const Counters = () => {
    const [allCounters, setAllCounters] = useRecoilState(counters);
    const [counterName, setCounterName] = useState('');
    const [initialValue, setInitialValue] = useState(0);
    const [showNameRequired, setShowNameRequired] = useState(false);
    const addCounter = () => {
        if (counterName.trim() === '') {
            setShowNameRequired(true);
            return;
        }
        setAllCounters({...allCounters, [counterName]: initialValue});
        setCounterName('');
        setInitialValue(0);
    };

    const onChangeCounter = (counterName, value) => {
        let newCounters = {...allCounters};
        for (const oldCounterName in newCounters) {
            if (oldCounterName === counterName) {
                newCounters[counterName] = value;
            }
        }
        setAllCounters(newCounters);
    }

    return (
        <Container fluid className={countersStyle.counterContainer}>
            <Row>
                <Col>
                    {Object.keys(allCounters).length > 0 && (
                        <Container fluid>
                            {Object.keys(allCounters).map((counterName) => (
                                <Row>
                                    <Col xs={8} className={countersStyle.counterName}>
                                        <strong>{counterName}</strong>
                                    </Col>
                                    <Col xs={4} className={countersStyle.counterValue}>
                                        <input
                                            type="number"
                                            value={allCounters[counterName]}
                                            onKeyPress={(evt) => evt.preventDefault()}
                                            onChange={(evt) => onChangeCounter(counterName, evt.target.value)}
                                        />
                                    </Col>
                                </Row>
                            ))}
                        </Container>
                    )}
                </Col>
            </Row>
            <Row>
                <Col>&nbsp;</Col>
            </Row>
            <Row>
                <Col>
                    Name:
                    <input
                        placeholder="counter name"
                        name="counterName"
                        value={counterName}
                        onChange={(evt) => {
                            setCounterName(evt.target.value);
                            setShowNameRequired(false);
                        }}
                    />
                </Col>
                <Col>
                    Value:
                    <input
                        type="number"
                        placeholder="initial value"
                        name="initialValue"
                        value={initialValue}
                        onChange={(evt) => setInitialValue(Number(evt.target.value))}
                    />
                </Col>
                <Col>
                    <button type="button" onClick={addCounter}>Add Counter</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    {showNameRequired && (
                        <strong className={countersStyle.nameRequired}>Name is required</strong>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Counters;