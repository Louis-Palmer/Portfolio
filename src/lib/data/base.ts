const firstName = 'Louis';
const lastName = 'Palmer';
const suffix = 'My portfolio';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
