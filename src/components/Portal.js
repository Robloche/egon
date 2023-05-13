import * as React from 'react';
import {createPortal} from 'react-dom';

type PortalProps = {
  +children: React.Node
};

function Portal({children}: PortalProps): React.Node {
  const [portalElt, setPortalElt] = React.useState(null);

  React.useEffect(() => {
    const newElt = document.createElement('div');
    document.querySelector('body').append(newElt);
    setPortalElt(newElt);

    return () => {
      newElt.remove();
    };
  }, []);

  if (!portalElt) {
    return null;
  }

  return createPortal(children, portalElt);
}

export default Portal;
