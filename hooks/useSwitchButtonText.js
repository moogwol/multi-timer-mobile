import { useState, useEffect } from 'react';

const useSwitchButtonText = (isCounting, setText) => {

    useEffect(() => {
        if (isCounting) {
          setText('Stop');
        } else {
          setText('Start');
        };
      }, [isCounting])
}

export default useSwitchButtonText