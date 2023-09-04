import './contact-page.css'

function createContactListItem(heading, description) {
    const listItem = document.createElement('li');
    const listItemHeading = document.createElement('h3');
    listItemHeading.innerText = heading;
    listItem.appendChild(listItemHeading);
   
    const listItemText = document.createTextNode(description);
    listItem.appendChild(listItemText);
   
    return listItem;
}

function contactPage() {
    const content = document.querySelector('#content');
    content.classList.add('contact-page');

    const contactHeadline = document.createElement('h2');
    contactHeadline.innerText = 'Contact Us';
    
    const contactList = document.createElement('ul');
   
    const workingHoursInfo = document.createElement('li');
    const workingHoursHeading = document.createElement('h3');
    workingHoursHeading.innerText = 'Working hours:';
    const regularWorkingHours = document.createElement('div');
    regularWorkingHours.innerText = 'Monday - Friday: 11:00 AM - 10:00 PM';
    const weekendWorkingHours = document.createElement('div');
    weekendWorkingHours.innerText = 'Saturday - Sunday: 12:00 PM - 11:00 PM';
    weekendWorkingHours.classList.add('weekend');
    workingHoursInfo.appendChild(workingHoursHeading);
    workingHoursInfo.appendChild(regularWorkingHours);
    workingHoursInfo.appendChild(weekendWorkingHours);

    const addressInfo = createContactListItem('Address:', '123 Virtual Avenue Binaryville, CYB 01010');
    const emailInfo = createContactListItem('Email Address:', ' info@cyberpizzeria.com');
    const phoneInfo = createContactListItem('Phone Number:', '(555) 123-4567');
    
    contactList.appendChild(workingHoursInfo);
    contactList.appendChild(addressInfo);
    contactList.appendChild(emailInfo);
    contactList.appendChild(phoneInfo);

    content.appendChild(contactHeadline);
    content.appendChild(contactList);
}

export default contactPage;