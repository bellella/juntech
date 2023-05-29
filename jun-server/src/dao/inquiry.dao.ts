import InquiryModel, { InquiryAttribute } from '../sql/models/inquiry.model'
class InquiryDAO {

    public getInquiries() {
        return InquiryModel.getModel().findAll();
    }

    public createInquiry(inquiry) {
        return InquiryModel.getModel().create(inquiry);
    }
}

export default new InquiryDAO();
