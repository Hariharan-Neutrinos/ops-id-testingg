let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../../middleware/Middleware'; //_splitter_
import * as settings from '../../../config/config'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { dmUtils } from '../../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class findEntity1ById {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'findEntity1ById';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new findEntity1ById(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_findEntity1ById_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: findEntity1ById');

    //appendnew_flow_findEntity1ById_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: findEntity1ById');

    this.app['post'](
      `${this.serviceBasePath}/dm/erd/entity_1/find-by-id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_0grguYfj00JSLkeH(bh);
          //appendnew_next_sd_gDD3JMC5kxkyGs9I
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_gDD3JMC5kxkyGs9I');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_findEntity1ById_HttpIn
  }
  //   service flows_findEntity1ById

  //appendnew_flow_findEntity1ById_start

  async sd_0grguYfj00JSLkeH(bh) {
    try {
      this.sdService.addDMPropertiesToBh(bh, bh.web.req, 'entity_1');
      bh = await this.sd_Z4kA205VeXs5OYuT(bh);
      //appendnew_next_sd_0grguYfj00JSLkeH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gny6V0SoVBrOpbuO');
    }
  }

  async sd_Z4kA205VeXs5OYuT(bh) {
    try {
      let dmUtilsInst = new dmUtils('sd_MsveiTdT4FSAQYZr');
      bh.result = await dmUtilsInst.find(
        '_EN_5xopnlx24l',
        bh.filter,
        bh.offSet,
        bh.orderBy,
        bh.pageSize
      );

      bh = await this.sd_yVLsuFfDyUBYYEOh(bh);
      //appendnew_next_sd_Z4kA205VeXs5OYuT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z4kA205VeXs5OYuT');
    }
  }

  async sd_yVLsuFfDyUBYYEOh(bh) {
    try {
      if (bh.result) {
        if (Array.isArray(bh.result) && bh.result.length) {
          bh.result = bh.result[0];
        }
      } else {
        throw new Error('Not found.');
      }
      bh = await this.sd_IpUaU51q741upXgr(bh);
      //appendnew_next_sd_yVLsuFfDyUBYYEOh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yVLsuFfDyUBYYEOh');
    }
  }

  async sd_IpUaU51q741upXgr(bh) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3pAkcs4juUPz9y9w');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_findEntity1ById_Catch
}
