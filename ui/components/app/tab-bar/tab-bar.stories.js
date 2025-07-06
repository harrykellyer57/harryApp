import React, { useState } from 'react';
import { Icon, IconName } from '../../component-library';
import TabBar from '.';

export default {
  title: 'Components/App/TabBar',
  argTypes: {
    isActive: { action: 'isActive' },
    tabs: { control: 'array' },
    onSelect: { action: 'onSelect' },
  },
  args: {
    tabs: [
      { icon: <Icon name={IconName.Setting} />, content: 'General', key: 'general' },
      { icon: <Icon name={IconName.Book} />, content: 'Contacts', key: 'contacts' },
      { icon: <Icon name={IconName.Snaps} />, content: 'Snaps', key:'snaps' },
      { icon:<i className="fa fa-lock" />, content:'SecurityAndPrivacy', key:'securityAndPrivacy'},
      { icon:<Icon name={IconName.Notification}/>,content:'Alerts',key:'alerts'},
      { icon:<i className="fa fa-plug"/>,content:'Networks',key:'networks'},
      { icon:<i className="fa fa-flask"/>,content:'Experimental',key:'experimental'},
      { icon:<Icon name={IconName.Info}/>,content:'About',key:'about'}
    ],
  }
};

export const DefaultStory = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState('');
  return (
    <TabBar
      tabs={tabs}
      isActive={(key) => currentTab === key}
      onSelect={setCurrentTab}
    />
  );
};
DefaultStory.storyName = 'Default';
