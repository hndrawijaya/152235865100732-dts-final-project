import { useEffect, useState } from 'react';
import Carousel from "better-react-carousel";
import { Link } from 'react-router-dom';
import apis from '../services/Apis';
import { Chip, Stack } from '@mui/material';
import { AccessTime, BakeryDining, RiceBowl } from '@mui/icons-material';

const ComponentCarousel = () => {
        const [response, setResponse] = useState([]);
        const [loading, setloading] = useState(true);

        const url = '/recipes-length/?limit=4';

        const fetchData = async (url) => {
                try {
                        const fetch = await apis.get(url);
                        setResponse(fetch.data.results);
                } catch (error) {
                        console.log(error);
                } finally {
                        setloading(false);
                }
        }
        
        useEffect(() => {
                fetchData(url);
        }, [url]);

    return (
        <Carousel
        scrollSnap={true}
        cols={1}
        rows={1}
        gap={10}
        loop={true}
        autoplay={5000}
        containerClassName="flex w-full md:h-[300px] px-3"
        arrowLeft={
          <div className="absolute flex flex-col items-center px-1 justify-center z-[104] cursor-pointer h-full left-0 rounded-l-sm bg-slate-800 bg-opacity-50">
            <svg
              className="rotate-180"
              width="20"
              height="34"
              viewBox="0 0 20 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.41423 0L0.641113 1.76728L15.8243 17L0.641113 32.2327L2.41423 34L19.3589 17L2.41423 0Z"
                fill="white"
              />
            </svg>
          </div>
        }
        arrowRight={
          <div className="absolute flex flex-col items-center px-1 justify-center z-[104] cursor-pointer h-full right-0 rounded-r-sm bg-slate-800 bg-opacity-30">
            <svg
              width="20"
              height="34"
              viewBox="0 0 20 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.41423 0L0.641113 1.76728L15.8243 17L0.641113 32.2327L2.41423 34L19.3589 17L2.41423 0Z"
                fill="white"
              />
            </svg>
          </div>
        }
      >
        {/* loop here */}
        {response.map((data) => (
          <Carousel.Item key={data.key}>
            <div className="relative w-full h-auto">
              {/* image */}
              <div className="relative inline-flex w-full">
                <div className="absolute w-full h-full bg-gradient-to-r from-[#040B16] via-slate-900" />
                <div className="flex w-1/2 min-h-full" />
                <img
                  src={`${data.thumb}`}
                  alt=""
                  className="w-1/2 h-auto rounded-l-3xl object-cover right-0"
                />
              </div>
              {/* content */}
              <div className="absolute flex flex-col gap-y-3 w-1/2 top-16 left-8">
                <p className="text-xl font-semibold">{data.title}</p>
                <div className="inline-flex gap-x-2 text-sm">
                </div>
                <div className="flex max-w-fit h-auto">
                  <Link to={`/detail/${data.key}`}>
                    <p className="inline-flex w-auto justify-center h-auto px-4 py-1 border-2 border-white gap-x-3 items-center">
                      <p className="text-xl">View</p>
                    </p>
                  </Link>
                </div>
                <Stack direction="row" spacing={1} mb={1}>
                  <Chip icon={<RiceBowl />} label={data.portion} size="small" color="primary" variant="outlined" />
                  <Chip icon={<BakeryDining />} label={data.dificulty} size="small" color="success" variant="outlined" />
                  <Chip icon={<AccessTime />} label={data.times} size="small" color="warning" variant="outlined" />
                </Stack>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
};

export default ComponentCarousel;