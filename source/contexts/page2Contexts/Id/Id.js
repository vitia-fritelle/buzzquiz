function Id() {

    let _id;
    this.setId = (id) => _id = id; 
    this.getId = () => _id;
};
const id = new Id();
export default id;