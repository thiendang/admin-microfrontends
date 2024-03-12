import React from 'react';
import DefaultLayout from '../../components/Layout/DefaultLayout.tsx';
import { MicrofrontendSlot } from 'microfrontends';
import ChatCard from '../../components/Chat/ChatCard.tsx';
import MapTwo from '../../components/Maps/MapTwo.tsx';

const ECommerce: React.FC = () => {
  return (
    <DefaultLayout>
      <MicrofrontendSlot className="contents" name="card-one" />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-8">
          <MicrofrontendSlot className="contents" name="chart-one" />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <MicrofrontendSlot className="contents" name="chart-two" />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <MicrofrontendSlot className="contents" name="chart-three" />
        </div>
        <div className="col-span-12 xl:col-span-8">
          <MapTwo />
        </div>
        <div className="col-span-12 xl:col-span-8">
          <MicrofrontendSlot className="contents" name="table-one" />
        </div>
        <ChatCard />
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
