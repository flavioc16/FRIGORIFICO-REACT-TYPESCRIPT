import { Router } from "express";

//CONTROLLERS DE USUÁRIOS-USERS
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { ListAllUsersController } from "./controllers/user/ListAllUsersController";
import { ListUserByIdController } from "./controllers/user/ListUserByIdController";

//CONTROLLERS DE CLIENTES-CLIENTS
import { CreateClientController } from "./controllers/client/CreateClientController";
import { ListClientsController } from "./controllers/client/ListClientsController";
import { ListByClientPurchaseController } from "./controllers/purchase/ListByClientPurchaseController";
import { RemoveClientController } from "./controllers/client/RemoveClientController";
import { ListClientByIdController } from "./controllers/client/ListClientByIdController";


//CONTROLLERS DE COMPRAS-PURCHASES
import { CreatePurchaseController } from "./controllers/purchase/CreatePurchaseController";
import { ListAllPurchaseController } from "./controllers/purchase/ListAllPurchaseController";
import { ListPurchaseController } from "./controllers/purchase/ListPurchaseController";
import { RemovePurchaseController } from "./controllers/purchase/RemovePurchaseController";
import { UpdatePurchaseController } from "./controllers/purchase/UpdatePurchaseController";


import { CreatePaymentController } from "./controllers/paymant/CreatePaymentController";

//MIDDLEWARES
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

//--ROTAS DE USUÁRIOS--USERS
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/users', isAuthenticated, new ListAllUsersController().handle)
router.get('/users/id',  isAuthenticated, new ListUserByIdController().handle)
router.get('/me',  isAuthenticated, new DetailUserController().handle)

//--ROTAS DE CLIENTES--CLIENTS
router.post('/client', isAuthenticated, new CreateClientController().handle)
router.get('/client', isAuthenticated, new ListClientsController().handle)
router.get('/client/purchase/:client_id', isAuthenticated, new ListByClientPurchaseController().handle)
router.get('/client/:id', isAuthenticated, new ListClientByIdController().handle)
router.delete('/client', isAuthenticated, new RemoveClientController().handle)

//--ROTAS DE COMPRAS--PURCHASES
router.post('/purchase', isAuthenticated, new CreatePurchaseController().handle)
router.get('/purchase', isAuthenticated, new ListAllPurchaseController().handle)
router.get('/purchase/:id', isAuthenticated, new ListPurchaseController().handle)
router.delete('/purchase', isAuthenticated, new RemovePurchaseController().handle)
router.put('/purchase', isAuthenticated, new UpdatePurchaseController().handle)

//--ROTAS DE PAGAMENTOS--PAYMENTS
router.post('/payment', isAuthenticated, new CreatePaymentController().handle)

export { router };