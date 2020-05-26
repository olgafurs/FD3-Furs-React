import React from 'react';

function withRainbowFrame(color) {
    return function(Comp) {       
        return props => {                
            let code = <Comp {...props} />;
            color.forEach(col => 
                code=<div style={{border: "solid 7px" + col, padding:"10px"}}>{code}</div> 
            );
            return code;
        }
        
        
    }
}

export { withRainbowFrame };