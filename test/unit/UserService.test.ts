import { UserService } from '../../src/api/services/examples/UserService';

describe('UserService', () => {
    let userService: UserService;

    beforeEach(() => {
        userService = new UserService();
    });

    it('should be defined', () => {
        expect(userService).toBeDefined();
    });
});