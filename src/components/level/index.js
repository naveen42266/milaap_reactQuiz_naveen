import React from "react";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Level = ({ mode }) => {

    return (
        <div className="mb-6 text-xl font-medium flex items-center capitalize">
            {mode}
            {mode === 'easy' ? (
                <div className='text-green-500 flex items-center'>
                    <StarIcon className="ml-2" fontSize="large" />
                    <StarBorderIcon className="ml-2" fontSize="large" />
                    <StarBorderIcon className="ml-2" fontSize="large" />
                </div>
            ) : mode === 'medium' ? (
                <div className='text-yellow-500 flex items-center'>
                    <StarIcon className="ml-2" fontSize="large" />
                    <StarIcon className="ml-2" fontSize="large" />
                    <StarBorderIcon className="ml-2" fontSize="large" />
                </div>
            ) : (
                <div className='text-red-500 flex items-center'>
                    <StarIcon className="ml-2" fontSize="large" />
                    <StarIcon className="ml-2" fontSize="large" />
                    <StarIcon className="ml-2" fontSize="large" />
                </div>
            )}
        </div>
    )

};

export default Level;