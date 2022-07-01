/* @flow */

import './Contact.scss';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';
import {useSelector} from 'react-redux';

const Contact = (): React.Node => {
  useSelector((state) => state.language);

  return (
    <div className='page'>
      <Header />
      <div style={{
        backgroundColor: '#000',
        color: '#fff'
      }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non volutpat elit. Phasellus sit amet
          tellus vel ipsum luctus dapibus. Nulla facilisi. Integer quis nunc vestibulum odio viverra pretium sed ut magna. Duis vitae dui interdum,
          pulvinar velit ac, vulputate ligula. Curabitur sagittis enim nec ante cursus laoreet. Nam sit amet elementum quam. Praesent imperdiet risus
          ut libero egestas pellentesque.</p>
        <p>Suspendisse dignissim ex vel ipsum consequat, sit amet molestie orci rhoncus. Praesent non diam eros. Duis quis tincidunt metus. Nunc
          interdum nisi sit amet eros facilisis gravida. Morbi ultrices convallis enim, at varius nulla pharetra mollis. Praesent nec auctor elit.
          Vestibulum suscipit risus vitae neque rhoncus laoreet. Aenean maximus nulla sed nunc porttitor, at vehicula mauris pellentesque. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In at metus eu quam feugiat facilisis non ac sapien. Fusce interdum
          et sapien vehicula ullamcorper. Etiam pretium mattis lorem, finibus pellentesque erat elementum ut. Sed in arcu quam.</p>
        <p>Nulla facilisi. Morbi quam quam, varius vel fermentum ut, feugiat vel odio. Maecenas eget felis eget eros sodales bibendum. Mauris id
          molestie dolor, non semper nibh. Curabitur pulvinar velit ac ultrices dictum. Aliquam arcu arcu, lobortis ornare lobortis eu, sodales ac
          turpis. Phasellus hendrerit elit id leo egestas ornare vitae ac metus. Cras nibh leo, auctor ac diam eu, elementum blandit purus. Suspendisse
          ac metus tincidunt, vulputate massa sed, varius tortor. Suspendisse blandit dignissim dui et aliquet. Nam pellentesque velit felis, sed
          euismod tortor tincidunt vel.</p>
        <p>Quisque quis sem id lorem porta imperdiet. Vestibulum id sagittis mi, vitae facilisis ligula. Nulla id
          consequat lacus. Morbi justo magna, consectetur quis ligula ac, faucibus tempor felis. Mauris pharetra, justo ut tempor tempus, velit sapien
          commodo purus, in pharetra metus odio nec metus. Donec dignissim ac metus ut laoreet. Nulla ornare eu massa eget semper. Nam sed faucibus
          libero, non malesuada massa. Nunc molestie efficitur erat at lacinia. Vivamus ac dignissim sapien. Duis at ultricies sem. Vivamus placerat,
          urna id feugiat aliquam, risus libero lobortis sapien, quis elementum nisi tellus non odio. Phasellus malesuada massa ut odio blandit
          condimentum. Integer congue erat egestas felis rutrum maximus.</p>
        <p>Maecenas commodo neque augue, ornare imperdiet metus pretium sit amet. Nullam tristique, velit eget molestie venenatis, mi ipsum mattis
          metus, sit amet dapibus dui odio quis neque. Cras suscipit ut nisl at fermentum. Vivamus interdum aliquet arcu eu pharetra. Nam non rutrum mi.
          Ut vitae risus dolor. Nullam semper molestie viverra. Quisque vel arcu a est consectetur sodales nec vitae nisl. Aliquam ut ipsum in lacus
          vehicula pulvinar eget at erat. Nam tincidunt euismod erat, vitae imperdiet dui ultrices nec. Phasellus venenatis tempus ligula, at lacinia
          diam efficitur vitae. Cras aliquam ipsum nec erat pretium rhoncus sit amet et eros. Phasellus suscipit lacus id ornare fermentum.</p>
        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam condimentum diam ultricies justo pharetra
          ullamcorper. Phasellus non facilisis felis. Integer scelerisque id ante eget finibus. Nam auctor ultrices libero at aliquam. Pellentesque
          ultrices elementum dolor, a congue diam interdum quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Suspendisse fermentum massa ac erat tincidunt, vitae placerat elit viverra.</p>
        <p>Etiam eget maximus ante, vitae euismod justo. Morbi nec aliquet enim. Curabitur tortor eros, feugiat sed
          mattis sit amet, ultricies eu sapien. Nunc eu pharetra tellus, eget venenatis augue. Etiam at pharetra magna. Aenean congue sapien eros.
          Integer massa massa, eleifend non laoreet in, egestas id turpis. Ut hendrerit pharetra justo ac elementum. Aenean rhoncus sollicitudin metus,
          quis fringilla felis laoreet sit amet. Vivamus elit diam, porta et dolor quis, hendrerit ullamcorper libero. Nam euismod eros ullamcorper odio
          interdum posuere. Suspendisse lacus eros, vulputate vitae est eget, tristique lobortis dui. Quisque hendrerit sed neque vel malesuada.
          Phasellus ultrices magna eget sapien consequat bibendum. Quisque cursus, velit non molestie lobortis, enim ligula volutpat risus, vel
          fermentum lectus neque vel diam.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
