const firstName = 'Louis';
const lastName = 'Palmer';
const suffix = 'Portfolio';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
